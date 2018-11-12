import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import sparsity from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof sparsity, 'function')
  },
  async 'calls package without error'() {
    await sparsity()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await sparsity({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T