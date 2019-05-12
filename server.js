const express = require('express')

const app = express()

app.get('/api/customers', (req, res) => {
    const customers = [
        { id: 1, firstName: 'John', lastName: 'Doe' },
        { id: 2, firstName: 'Steve', lastName: 'Gago' },
        { id: 3, firstName: 'Mary', lastName: 'Karen' },
    ]
    res.json(customers)
})


const port = 5000

app.listen(port, () => {
    console.log('Server was started on port: ' + port);
})