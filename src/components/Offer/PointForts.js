import React from "react";

export default function PointForts(props) {
  return (
    <div id="point-forts">
      <div className="border-top border-2 text-center p-5 text-center">
        <p>{props.intro}</p>
      </div>
      <div>
        <p>{props.intro2}</p>

        <ul>
          <li className="m-3">
            {props.point1}
          </li>
          <li className="m-3">
            {props.point2}
          </li>
          <li className="m-3">
            {props.point3}
          </li>
        </ul>
      </div>
    </div>
  );
}
