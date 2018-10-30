var elasticsearch = require('elasticsearch');
var esclient = new elasticsearch.Client({
  host: 'localhost:9200'
});


const createPost = async function (post) {
  const newProduct = {
    index: 'myindex',
    type: 'mytype',
    id: '1',
    body: {
      name: 'Product 1',
      tags: ['y', 'z'],
      published: true,
      published_at: '2013-01-01',
      counter: 1
    }
  }
  return await esclient.create(newProduct);
  
}

const getPosts = async function(name) {
  const response = await esclient.search({
    index: 'myindex',
    body: {
      query: {
        match: {
          name: name
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
  return hits
}

module.exports = { createPost, getPosts }