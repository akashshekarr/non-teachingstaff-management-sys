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
      SET Leave_ID=?, NTSLeave_ID=?, Leave_Reason=?, Leave_Start_Date=?,  Leave_End_Date=?,  NTS_ID=?
      WHERE NTS_ID=?
    `;
  
    db.query(
      sql,
      [Leave_ID, NTSLeave_ID, Leave_Reason, Leave_Start_Date, Leave_End_Date,  updatedNTS_ID, NTS_ID], // Match the order of parameters
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
  