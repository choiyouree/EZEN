import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  Fragment,
  forwardRef,
  useReducer,
  useImperativeHandle
} from "react";
import Recipe from "./Recipe";

function Menu({ title, recipes }) {
  // useState 를 사용한 컴포넌트의 상태값 설정
  //   const [recipes, setRecipes] = useState('기본값') // 상태값이 기본타입인 경우
  //   const [title, setTitle] = useState('기본값') // 상태값이 기본타입인 경우

  // JSX로 화면 만들기
  return (
    <article>
      <header>
        <h1>{title}</h1>
      </header>
      <div className="recipes">
        {recipes.map((recipe, index) => {
          debugger;
          return <Recipe key={index} {...recipe}></Recipe>;
          // return <div key={index}>{recipe.name}</div>
        })}
      </div>
    </article>
  );
}

Menu.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
};
Menu.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
};
export default Menu;
