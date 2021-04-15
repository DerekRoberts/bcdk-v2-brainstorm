import {expect, test} from '@oclif/test'

describe('login', () => {
  test
  .stdout()
  .command(['login'])
  .it('runs login', ctx => {
    expect(ctx.stdout).to.contains('Not logged in')
  })
})
