/**
 * Function adapted from react-typical (https://github.com/catalinmiron/react-typical)
 */

import React, {useRef, useEffect, memo} from "react";
import {type, type as loopedType} from "../../libs/typical";

import './styles.css'

const Typical = ({
                   steps,
                   loop,
                   className,
                   wrapper = "p"
                 }: { steps: Array<string|number>, loop: number, className?: string, wrapper: string }) => {
  const typicalRef = useRef(null);
  const Component = wrapper;
  const classNames = ["typicalWrapper"];

  if (className) {
    classNames.unshift(className);
  }

  useEffect(() => {
    if (loop === Infinity) {
      type(typicalRef.current, ...steps, loopedType);
    } else {
      type(
        typicalRef.current,
        ...Array(loop)
          .fill(steps)
          .flat()
      );
    }
  });

  // @ts-ignore
  return <Component ref={typicalRef} className={classNames.join(' ')}/>;
}

export default memo(Typical)