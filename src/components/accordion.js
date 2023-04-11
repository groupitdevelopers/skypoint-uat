import React, { useState } from "react"
import useWindowSize from "./useWindowSize"

const Accordion = ({
  title,
  content,
  headerType,
  headerColor,
  list,
  isListType,
}) => {
  const [isActive, setIsActive] = useState(false)
  const isOdd = require("is-odd")
  const size = useWindowSize()
  const List = ({ number }) => {
    if (number < 10) number = "0" + (number + 1)
    return number
  }

  return (
    <>
      {isListType && (
        <div className="accordionItem">
          {size.width < 900 && (
            <>
              <div className="mobileLeftSide">
                <div className="middleLine"></div>
                <div className={`listBox bg-${headerType}`}>
                  <List number={list} />
                </div>
              </div>
              <div className="mobileRightSide">
                <div
                  className={`accordionTitle col p-0 mb-1 txt-${headerColor}`}
                >
                  {title}
                </div>
                <div className="accordionContent">{content}</div>
              </div>
            </>
          )}
          {size.width >= 900 && (
            <>
              <div className="leftSide">
                {isOdd(list) && (
                  <>
                    <div
                      className={`accordionTitle col p-0 mb-1 txt-${headerColor}`}
                    >
                      {title}
                    </div>
                    <div className="accordionContent">{content}</div>
                  </>
                )}
              </div>
              <div className="middle">
                <div className="middleLine"></div>
                <div className={`listBox bg-${headerType}`}>
                  <List number={list} />
                </div>
              </div>
              <div className="rightSide">
                {!isOdd(list) && (
                  <>
                    <div
                      className={`accordionTitle col p-0 mb-1 txt-${headerColor}`}
                    >
                      {title}
                    </div>
                    <div className="accordionContent">{content}</div>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      )}

      {!isListType && (
        <div className="accordionItem row">
          <div className={`bg-${headerType} col_2-12 txt-white accordionList`}>        
              <List number={list} />            
          </div>
          <div
            className={`accordionTitle col txt-${headerColor}`}
            onClick={() => setIsActive(!isActive)}
            role="presentation"
          >
            <div>{title}</div>
            <div className={`txt-${headerColor}`}>{isActive ? "-" : "+"}</div>
          </div>
          {isActive && <div className="accordionContent">{content}</div>}
        </div>
      )}
    </>
  )
}

export default Accordion
