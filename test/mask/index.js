import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import sparsity from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await sparsity({
      text: input,
    })
    return res
  },
  context: Context,
})

export default ts