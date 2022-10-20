import {wrapper} from '@src/store/store'
import {
  getRunningOperationPromises,
  getTodos,
} from '@src/store/todo/todoApi'
import TodosView from '@src/views/todos'
import {NextPage, GetServerSideProps} from 'next'
import React from 'react'

/* SERVER */ // prettier-ignore
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(getTodos.initiate())

    await Promise.all(getRunningOperationPromises());
    return {
      props: {},
    }
  }
)

/* CLIENT */
const TodosPage: NextPage = function TodosPage() {
  return <TodosView />
}

export default TodosPage
