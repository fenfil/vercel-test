"use client";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addTodo } from "../redux/features/todo";
import styled from "@emotion/styled";

export const Thing = () => {
  const dispatch = useDispatch();
  const { user, list } = useSelector(
    (s: RootState) => ({ user: s.todoReducer.user, list: s.todoReducer.list }),
    shallowEqual
  );
  console.log("here thing", user, list);

  return (
    <div>
      <p>private 1 {process.env.NEXT_PUBLIC_PRIVATE}</p>
      <p>thing {user}</p>
      {list.map((l) => (
        <p key={l.id}>
          {l.id} {l.name}
        </p>
      ))}
      <button onClick={() => dispatch(addTodo({ name: "qwe", id: list.length, done: false }))}>add todo</button>
    </div>
  );
};
