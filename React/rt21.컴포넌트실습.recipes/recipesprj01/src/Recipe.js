import React, { useState, useEffect, useRef, useCallback, useMemo, Fragment, forwardRef, useReducer, useImperativeHandle } from 'react';

function Recipe({ name, ingredients, steps }) {
  // useState 를 사용한 컴포넌트의 상태값 설정
  const [변수명, set변수명] = useState("기본값"); // 상태값이 기본타입인 경우

  // JSX로 화면 만들기
  return (
    <section id={name}>
      <h1>{name}</h1>
      <ul className="ingredients">
        {ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient.name}</li>
        ))}
      </ul>
      <section className="instructions">
        <h2>조리 절차</h2>
        {steps.map((step, i) => (
          <p key={i}>{step}</p>
        ))}
      </section>
    </section>
  );
}
export default Recipe;