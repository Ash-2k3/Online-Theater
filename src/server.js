const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const sessionRoutes = require('./routes/mockRoutes');
app.use('/api', sessionRoutes);

app.get('/', (req, res) => {
           res.send('Welcome to the Online Theater API'); // You can customize the welcome message
         });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});