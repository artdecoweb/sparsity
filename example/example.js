/* yarn example/ */
import sparsity from '../src'

(async () => {
  const res = await sparsity({
    text: 'example',
  })
  console.log(res)
})()