import app from './src/app.js';

/* server running */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});
