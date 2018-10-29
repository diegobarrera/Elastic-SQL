var elasticsearch = require('elasticsearch');
var esclient = new elasticsearch.Client({
  host: 'localhost:9200'
});


const createAndFind = async function () {
  // const newProduct = {
  //   index: 'myindex',
  //   type: 'mytype',
  //   id: '1',
  //   body: {
  //     name: 'Product 1',
  //     tags: ['y', 'z'],
  //     published: true,
  //     published_at: '2013-01-01',
  //     counter: 1
  //   }
  // }
  // await esclient.create(newProduct);
  
  const response = await esclient.search({
    index: 'myindex',
    body: {
      query: {
        match: {
          name: 'Product 1'
        }
      },
      aggs: {
        top_10_states: {
          terms: {
            field: 'state',
            size: 10
          }
        }
      }
    }
  })
  
  const hits = response.hits.hits
  console.log(hits)
}

module.exports.test = createAndFind