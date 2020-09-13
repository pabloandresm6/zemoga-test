const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/people', (req, res) => {
    
    let response = [
      {
        id: 'kanye',
        name: 'Kanye West',
        description: 'Vestibulum diam ante, portittor a odio eged, rhoncus neque. Aenean eu velit libero',
        ago: '1 month',
        section: 'Entertainment',
        upVotes: 64,
        downVotes: 36,
        imageUrl: 'layer_13.png',
        voted: false,
      },
      {
        id: 'mark',
        name: 'Mark Zuckerberg',
        description: 'Vestibulum diam ante, portittor a odio eged, rhoncus neque. Aenean eu velit libero',
        ago: '1 month',
        section: 'Business',
        upVotes: 36,
        downVotes: 64,
        imageUrl: 'mark.png',
        voted: true,
      },
      {
        id: 'cristina',
        name: 'Cristina Fernández de Kirchner',
        description: 'Vestibulum diam ante, portittor a odio eged, rhoncus neque. Aenean eu velit libero',
        ago: '1 month',
        section: 'Politics',
        upVotes: 36,
        downVotes: 64,
        imageUrl: 'layer_12.png',
        voted: false,
      },
      {
        id: 'malala',
        name: 'Malala Yousafzai',
        description: 'Vestibulum diam ante, portittor a odio eged, rhoncus neque. Aenean eu velit libero',
        ago: '1 month',
        section: 'Entertainment',
        upVotes: 64,
        downVotes: 36,
        imageUrl: 'malala_yousafzai.png',
        voted: false,
      }]
    res.send(response);
    
});

app.listen(3008, () => {
    console.log('server app listening on port 3008!')
  });