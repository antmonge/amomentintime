const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const { spawn } = require('child_process');
const app = express()
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json())
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.post('/api', (req, res) => {
  console.log(`Start`)
  console.log(req.body)
  let dataToSend
//  let largeDataSet = []
  // spawn new child process to call the python script
  const python = spawn('python', ['server/test2.py', req.body[1], req.body[3]])
//  console.log('Start')
  // collect data from script
  python.stdout.on('data', function (data) {
    console.log(`Pipe data from python script ...`)
    dataToSend =  data;
//    //largeDataSet.push(data)
  })

  python.stderr.on('data', function (data) {
    console.log(`Python script error ${data}`)
    dataToSend =  data;
//    //largeDataSet.push(data)
  })

  // in close event we are sure that stream is from child process is closed
  python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`)
    //send data to browser
    res.json({message: "Hello from Server Again2"})
  })
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.js'));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
})
