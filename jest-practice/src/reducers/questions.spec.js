import { questions } from './questions'

describe('The questions reducer', () => {
  it('should not modify state for unrecognized action', () => {
    console.log('testing questions')
    const state = ['foo', 'bar']
    const stateClone = ['foo', 'bar']
    const newState = questions(state, {type:'UNRECOGNIZED_ACTION'})

    expect(newState).toEqual(stateClone)
    expect(newState).toBe(state)
  })

  it('should add new questions', () => {
    const state = [{ question_id:'foo' }, { question_id:'bar' }]
    const newQuestion = { question_id:'baz' }
    const newState = questions(state, { type:'FETCHED_QUESTION', question:newQuestion })

    console.log(newState)

    expect(newState).toContain(newQuestion) //works like 'toBe', clone will not work
    expect(state).not.toContain(newQuestion)
    expect(newState).toHaveLength(3)
  })
})
