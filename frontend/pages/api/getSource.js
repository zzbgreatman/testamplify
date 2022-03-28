export default function handler(req, res) {
    console.log('In getSources.js');
    if (req.method == 'POST') {
        var body = req.body;
        res.status(200).json({body});
    } else {
        res.status(405).json({ message: 'Only POST requests allowed' });
    }
}