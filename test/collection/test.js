module.exports = async function() {
  console.debug('[[testing collection]]')
  await require('./insert')()
  await require('./delete')()
  await require('./replace')()
  await require('./find')()
}
