const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ntsdbspro",
});

//GET nts
app.get("/nts03", (req, res) => {
  const sql = "SELECT NTS_ID, FirstName, SecondName, Gender, DATE_FORMAT(DOB, '%Y-%m-%d') AS DOB, Ph_No, Email, Address FROM nts03";

  db.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json(data);
  });
});

//dept
app.get("/dept", (req, res) => {
  const sql = "SELECT * FROM dept";
  db.query(sql, (err, data) => {
    if (err) {
      console.error(err); // Log the error for debugging
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(data);
    }
  });
});

//pos
app.get("/position", (req, res) => {
  const sql = "SELECT * FROM pos";
  db.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(data);
    }
  });
});

//sal
app.get("/salary", (req, res) => {
  const sql = "SELECT NTS_ID, NTSSal_ID, Sal_ID, Sal_Amnt, DATE_FORMAT(Sal_CreditDate, '%Y-%m-%d') AS Sal_CreditDate FROM salary";

  db.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json(data);
  });
});


//leave
app.get("/ntsleave", (req, res) => {
  const sql = "SELECT NTS_ID, Leave_ID, Leave_Reason, DATE_FORMAT(Leave_Start_Date, '%Y-%m-%d') AS Leave_Start_Date, DATE_FORMAT(Leave_End_Date, '%Y-%m-%d') AS Leave_End_Date FROM ntsleave";

  db.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json(data);
  });
});



//POST NTS
app.post('/create', (req, res) => {
  const sql = "INSERT INTO nts03 (`NTS_ID`, `FirstName`, `SecondName`, `Gender`, `DOB`, `Ph_No`, `Email`, `Address`) VALUES (?)";
  const VALUES = [
    req.body.NTS_ID,
    req.body.FirstName,
    req.body.SecondName,
    req.body.Gender,
    req.body.DOB,
    req.body.Ph_No,
    req.body.Email,
    req.body.Address,
  ];

  db.query(sql, [VALUES], (err, data) => {
    if (err) return res.json("DataBaseError");
    return res.json(data);
  });
});


//POST DEPT
app.post('/create1', (req, res) => {
  const sql = "INSERT INTO dept (`NTSDept_ID`, `DeptID`, `DeptName`, `NTS_ID`) VALUES (?)";
  const VALUES = [
    req.body.NTSDept_ID,
    req.body.DeptID,
    req.body.DeptName,
    req.body.NTS_ID,
  ];

  db.query(sql, [VALUES], (err, data) => {
    if (err) return res.json("DataBaseError");
    return res.json(data);
  });
});

// POST POS
app.post('/createpos', (req, res) => {
  const sql = "INSERT INTO pos (`NTSPos_ID`, `Pos_ID`, `Pos_Name`, `NTS_ID`) VALUES (?)";
  const VALUES = [
    req.body.NTSPos_ID,
    req.body.Pos_ID,
    req.body.Pos_Name,
    req.body.NTS_ID,
  ];
  // res.send(req);
  db.query(sql, [VALUES], (err, data) => {
    if (err) return res.json("DataBaseError");
    return res.json(data);
  });
});



//POST SALARY
app.post('/create3', (req, res) => {
  const sql = "INSERT INTO salary (`NTSSal_ID`, `Sal_ID`, `Sal_Amnt`, `Sal_CreditDate`, `NTS_ID`) VALUES (?)";
  const VALUES = [
    req.body.NTSSal_ID,
    req.body.Sal_ID,
    req.body.Sal_Amnt,
    req.body.Sal_CreditDate,
    req.body.NTS_ID,
  ];
  db.query(sql, [VALUES], (err, data) => {
    if (err) return res.json("DataBaseError");
    return res.json(data);
  });
});


//POST LEAVE
app.post('/create4', (req, res) => {
  const sql = "INSERT INTO ntsleave (`Leave_ID`, `Leave_Reason`, `Leave_Start_Date`, `Leave_End_Date`, `NTS_ID`) VALUES (?)";
  const VALUES = [
    req.body.Leave_ID,
    req.body.Leave_Reason,
    req.body.Leave_Start_Date,
    req.body.Leave_End_Date,
    req.body.NTS_ID,
  ];

  
  db.query(sql, [VALUES], (err, data) => {
    if (err) return res.json("DataBaseError");
    return res.json(data);
  });
});

//updatents
app.put('/Updatents/:NTS_ID', (req, res) => {
  const NTS_ID = req.params.NTS_ID;
  const {
    NTS_ID: updatedNTS_ID,
    FirstName,
    SecondName,
    Gender,
    DOB,
    Ph_No,
    Email,
    Address
  } = req.body;

  const sql = `
    UPDATE nts03
    SET NTS_ID=?, FirstName=?, SecondName=?, Gender=?, DOB=?, Ph_No=?, Email=?, Address=?
    WHERE NTS_ID=?
  `;

  db.query(
    sql, [updatedNTS_ID, FirstName, SecondName, Gender, DOB, Ph_No, Email, Address, NTS_ID],
    (err, result) => {
      if (err) {
        console.error('Error updating record:', err);
        res.status(500).json({ error: 'Error updating record' });
      } else {
        res.json({ message: 'Record updated successfully' });
      }
    }
  );
});

app.get('/nts03/:NTS_ID', (req, res) => { 
  const NTS_ID = req.params.NTS_ID;
  const sql = "SELECT * FROM nts03 WHERE NTS_ID=?";

  db.query(sql, [NTS_ID], (err, data) => {
    if (err) {
      console.error('Error retrieving record:', err);
      res.status(500).json({ error: 'Error retrieving record' });
    } else {
      if (data.length === 0) {
        res.status(404).json({ message: "Record not found" });
      } else {
        res.json(data);
      }
    }
  });
});

app.delete('/nts03/:NTS_ID',(req,res)=>{
  const sql = "DELETE FROM nts03 WHERE NTS_ID = ?";
  const NTS_ID= req.params.NTS_ID;
  db.query(sql,[NTS_ID],(err,result)=>{
      if(err) return res.json({message:"Erron inside server"});
      return res.json(result);    
  })
})


//updatedept
app.put('/Updatedept/:NTS_ID', (req, res) => {
  const NTS_ID = req.params.NTS_ID;
  const {
    NTSDept_ID,
    DeptID,
    DeptName,
    NTS_ID: updatedNTS_ID, // Rename NTS_ID to updatedNTS_ID
  } = req.body;

  const sql = `
    UPDATE dept
    SET DeptID=?, NTSDept_ID=?, DeptName=?, NTS_ID=?
    WHERE NTS_ID=?
  `;

  db.query(
    sql,
    [DeptID, NTSDept_ID, DeptName, updatedNTS_ID, NTS_ID], // Match the order of parameters
    (err, result) => {
      if (err) {
        console.error('Error updating record:', err);
        res.status(500).json({ error: 'Error updating record' });
      } else {
        res.json({ message: 'Record updated successfully' });
      }
    }
  );
});

app.get('/dept/:NTS_ID', (req, res) => { // Change NTS_ID to match the route parameter
  const NTS_ID = req.params.NTS_ID;
  const sql = "SELECT * FROM dept WHERE NTS_ID=?";

  db.query(sql, [NTS_ID], (err, data) => {
    if (err) {
      console.error('Error retrieving record:', err);
      res.status(500).json({ error: 'Error retrieving record' });
    } else {
      if (data.length === 0) {
        res.status(404).json({ message: "Record not found" });
      } else {
        res.json(data);
      }
    }
  });
});

app.delete('/dept/:NTS_ID',(req,res)=>{
  const sql = "DELETE FROM dept WHERE NTS_ID = ?";
  const NTS_ID= req.params.NTS_ID;
  db.query(sql,[NTS_ID],(err,result)=>{
      if(err) return res.json({message:"Error inside server"});
      return res.json(result);    
  })
})

//updatepos
app.put('/Updatepos/:NTS_ID', (req, res) => {
  const NTS_ID = req.params.NTS_ID;
  const {
    NTSPos_ID,
    Pos_Name,
    NTS_ID: updatedNTS_ID, // Rename NTS_ID to updatedNTS_ID
  } = req.body;

  const sql = `
    UPDATE pos
    SET NTSPos_ID=?, Pos_Name=?, NTS_ID=?
    WHERE NTS_ID=?
  `;

  db.query(
    sql,
    [NTSPos_ID, Pos_Name, updatedNTS_ID, NTS_ID], // Match the order of parameters
    (err, result) => {
      if (err) {
        console.error('Error updating record:', err);
        res.status(500).json({ error: 'Error updating record' });
      } else {
        res.json({ message: 'Record updated successfully' });
      }
    }
  );
});

app.get('/position/:NTS_ID', (req, res) => { // Change NTS_ID to match the route parameter
  const NTS_ID = req.params.NTS_ID;
  const sql = "SELECT * FROM pos WHERE NTS_ID=?";

  db.query(sql, [NTS_ID], (err, data) => {
    if (err) {
      console.error('Error retrieving record:', err);
      res.status(500).json({ error: 'Error retrieving record' });
    } else {
      if (data.length === 0) {
        res.status(404).json({ message: "Record not found" });
      } else {
        res.json(data);
      }
    }
  });
});

app.delete('/position/:NTS_ID',(req,res)=>{
  const sql = "DELETE FROM pos WHERE NTS_ID = ?";
  const NTS_ID= req.params.NTS_ID;
  db.query(sql,[NTS_ID],(err,result)=>{
      if(err) return res.json({message:"Error inside server"});
      return res.json(result);    
  })
})


//updatesal
app.put('/Updatesal/:NTS_ID', (req, res) => {
  const NTS_ID = req.params.NTS_ID;
  const {
    NTSSal_ID,
    Sal_ID,
    Sal_Amnt,
    Sal_CreditDate,
    NTS_ID: updatedNTS_ID, // Rename NTS_ID to updatedNTS_ID
  } = req.body;

  const sql = `
    UPDATE salary
    SET Sal_ID=?, NTSSal_ID=?, Sal_Amnt=?, Sal_CreditDate=?, NTS_ID=?
    WHERE NTS_ID=?
  `;

  db.query(
    sql,
    [Sal_ID, NTSSal_ID, Sal_Amnt, Sal_CreditDate, updatedNTS_ID, NTS_ID], // Match the order of parameters
    (err, result) => {
      if (err) {
        console.error('Error updating record:', err);
        res.status(500).json({ error: 'Error updating record' });
      } else {
        res.json({ message: 'Record updated successfully' });
      }
    }
  );
});

app.get('/salary/:NTS_ID', (req, res) => { // Change NTS_ID to match the route parameter
  const NTS_ID = req.params.NTS_ID;
  const sql = "SELECT * FROM salary WHERE NTS_ID=?";

  db.query(sql, [NTS_ID], (err, data) => {
    if (err) {
      console.error('Error retrieving record:', err);
      res.status(500).json({ error: 'Error retrieving record' });
    } else {
      if (data.length === 0) {
        res.status(404).json({ message: "Record not found" });
      } else {
        res.json(data);
      }
    }
  });
});

app.delete('/delete/:NTS_ID',(req,res)=>{
  const sql = "DELETE FROM salary WHERE NTS_ID = ?";
  const NTS_ID= req.params.NTS_ID;
  db.query(sql,[NTS_ID],(err,result)=>{
      if(err) return res.json({message:"Erron inside server"});
      return res.json(result);    
  })
})

//updateleave
app.put('/Updatelev/:NTS_ID', (req, res) => {
  const NTS_ID = req.params.NTS_ID;
  const {
    NTSLeave_ID,
    Leave_ID,
    Leave_Reason,
    Leave_Start_Date,
    Leave_End_Date,
    NTS_ID: updatedNTS_ID, // Rename NTS_ID to updatedNTS_ID
  } = req.body;

  const sql = `
    UPDATE ntsleave
    SET Leave_ID=?, Leave_Reason=?, Leave_Start_Date=?, Leave_End_Date=?, NTS_ID=?
    WHERE NTS_ID=?
  `;

  db.query(
    sql,
    [Leave_ID, Leave_Reason, Leave_Start_Date, Leave_End_Date, updatedNTS_ID, NTS_ID], // Match the order of parameters
    (err, result) => {
      if (err) {
        console.error('Error updating record:', err);
        res.status(500).json({ error: 'Error updating record' });
      } else {
        res.json({ message: 'Record updated successfully' });
      }
    }
  );
});


app.get('/ntsleave/:NTS_ID', (req, res) => { // Change NTS_ID to match the route parameter
  const NTS_ID = req.params.NTS_ID;
  const sql = "SELECT * FROM ntsleave WHERE NTS_ID=?";

  db.query(sql, [NTS_ID], (err, data) => {
    if (err) {
      console.error('Error retrieving record:', err);
      res.status(500).json({ error: 'Error retrieving record' });
    } else {
      if (data.length === 0) {
        res.status(404).json({ message: "Record not found" });
      } else {
        res.json(data);
      }
    }
  });
});

app.delete('/delete/:NTS_ID',(req,res)=>{
  const sql = "DELETE FROM ntsleave WHERE NTS_ID = ?";
  const NTS_ID= req.params.NTS_ID;
  db.query(sql,[NTS_ID],(err,result)=>{
      if(err) return res.json({message:"Erron inside server"});
      return res.json(result);    
  })
})


//report
app.get('/getreport/:NTS_ID', (req, res) => {
  const NTS_ID = req.params.NTS_ID;
  const sql = "SELECT DISTINCT nts03.NTS_ID, nts03.FirstName, nts03.SecondName, nts03.Gender, DATE_FORMAT(nts03.DOB, '%Y-%m-%d') AS DOB, dept.DeptName, pos.Pos_Name, salary.Sal_Amnt FROM nts03 JOIN dept ON nts03.NTS_ID = dept.NTS_ID JOIN pos ON nts03.NTS_ID = pos.NTS_ID JOIN salary ON nts03.NTS_ID = salary.NTS_ID WHERE nts03.NTS_ID = ?";



  db.query(sql ,[NTS_ID],(err, data) => {
    if (err) {
      console.error('Error retrieving record:', err);
      res.status(500).json({ error: 'Error retrieving record' });
    } else {
      if (data.length === 0) {
        res.status(404).json({ message: "Record not found" });
      } else {
        res.json(data);
      }
    }
  });
});


//levreport

app.get('/getreport1/:NTS_ID', (req, res) => {
  const NTS_ID = req.params.NTS_ID;
  const sql = "SELECT DISTINCT nts03.FirstName, nts03.SecondName, nts03.Gender, DATE_FORMAT(nts03.DOB, '%Y-%m-%d') AS DOB, dept.DeptName, pos.Pos_Name, ntsleave.Leave_Reason, DATE_FORMAT(ntsleave.Leave_Start_Date, '%Y-%m-%d') AS Leave_Start_Date, DATE_FORMAT(ntsleave.Leave_End_Date, '%Y-%m-%d') AS Leave_End_Date FROM nts03 JOIN dept ON nts03.NTS_ID = dept.NTS_ID JOIN pos ON nts03.NTS_ID = pos.NTS_ID JOIN ntsleave ON nts03.NTS_ID = ntsleave.NTS_ID";
  
  
  db.query(sql ,[NTS_ID],(err, data) => {
    if (err) {
      console.error('Error retrieving record:', err);
      res.status(500).json({ error: 'Error retrieving record' });
    } else {
      if (data.length === 0) {
        res.status(404).json({ message: "Record not found" });
      } else {
        res.json(data);
      }
    }
  });
});


app.listen(8081, () => {
  console.log("Listening");
});
