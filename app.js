const express = require('express');
const app = express();
const path = require('path');

// Serve static files (including your PDF file)
app.use(express.static(__dirname));

app.get('/download', (req, res) => {
  // Specify the path to your PDF file
  const pdfPath = path.join(__dirname, 'NOC23CE64S4474008010059927.pdf');

  // Set the response headers to indicate a file download
  res.setHeader('Content-Disposition', 'attachment; filename=NOC23CE64S4474008010059927.pdf');
  res.setHeader('Content-Type', 'application/pdf');

  // Send the file as a response
  res.sendFile(pdfPath);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
