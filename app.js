import express from "express";

const app = express();
const PORT = 5000; // webhook port on Server A

app.use(express.json()); // GitHub sends application/json

app.get("/",(req,res)=>{
  console.log("Thanks for sending request...")
  return res.json({message:"thanks for contacting...."})
})

app.listen(PORT, () => {
  console.log(`Webhook server listening on port ${PORT}`);
});
