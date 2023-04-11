import React from "react"
import useWindowSize from "../components/useWindowSize"
import Button from '../components/button'

export const Text = props => {
  const size = useWindowSize()
  const anchorId = props.slice.primary.anchor_id
  const data = props.slice.primary
  
  return (
    <section
      className="container textWrapper"
      id = {anchorId}
    >
      {props.slice.primary.type === "Left" && (
        <>
          {size.width < 900 && (
            <>
              <div className="row mx-2">
                <div className="col_half m-0 p-0">
                  <div className="col m-0 pl-0 txt-left">
                    <h2
                      className={`m-0 txt-${props.slice.primary.header_type}`}
                    >
                      {props.slice.primary.header_text}
                    </h2>
                  </div>
                </div>
                <div className="col_half"></div>
              </div>
              <div className="row mx-2">
                <div className="col m-0 pl-0 txt-left">
                  <p className="txt-lg m-0">{props.slice.primary.sub_header}</p>
                </div>
              </div>
              <div className="row mx-2">
                <div className="col m-0 pl-0 txt-left">
                  <Button 
                    buttonText={data.button_text}
                    buttonType={data.button_type}
                    buttonLinkUrl={data.button_link.url}
                    buttonLinkUid={data.button_link.uid}
                    buttonAnchorLink={data.anchor_link}
                    accessoPromo={data.accesso_promo_code}
                    accessoKeyword={data.accesso_keyword}
                    accessoPackageId={data.accesso_packageid}
                  />
                </div>
              </div>
            </>
          )}
          {size.width >= 900 && (
            <>
              <div className="row">
                <div className="col_half m-0 p-0">
                  <div className="row">
                    <div className="col_half m-0 pl-0 txt-left">
                      <h2
                        className={`m-0 txt-${props.slice.primary.header_type}`}
                      >
                        {props.slice.primary.header_text}
                      </h2>
                    </div>
                    <div className="col_half m-0"></div>
                  </div>
                </div>
                <div className="col_half m-0"></div>
              </div>
              <div className="row">
                <div className="col_half m-0 pl-0 txt-left">
                  <p className="txt-lg m-0">{props.slice.primary.sub_header}</p>
                </div>
                <div className="col_half m-0"></div>
              </div>
              <div className="row">
                <div className="col_half m-0 pl-0 txt-left">
                  <Button 
                    buttonText={data.button_text}
                    buttonType={data.button_type}
                    buttonLinkUrl={data.button_link.url}
                    buttonLinkUid={data.button_link.uid}
                    buttonAnchorLink={data.anchor_link}
                    accessoPromo={data.accesso_promo_code}
                    accessoKeyword={data.accesso_keyword}
                    accessoPackageId={data.accesso_packageid}
                  />
                </div>
                <div className="col_half m-0"></div>
              </div>
            </>
          )}
        </>
      )}

      {props.slice.primary.type === "Center" && (
        <>
          {size.width < 900 && (
            <>
              <div className="row">
                <div className="col m-0">
                  <h2
                    className={`m-0 txt-center txt-${props.slice.primary.header_type}`}
                  >
                    {props.slice.primary.header_text}
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col m-0 txt-center">
                  <p className="txt-lg m-0">{props.slice.primary.sub_header}</p>
                </div>
              </div>
              <div className="row">
                <div className="col m-0 txt-center">
                  <Button 
                    buttonText={data.button_text}
                    buttonType={data.button_type}
                    buttonLinkUrl={data.button_link.url}
                    buttonLinkUid={data.button_link.uid}
                    buttonAnchorLink={data.anchor_link}
                    accessoPromo={data.accesso_promo_code}
                    accessoKeyword={data.accesso_keyword}
                    accessoPackageId={data.accesso_packageid}
                  />
                </div>
              </div>
            </>
          )}
          {size.width >= 900 && (
            <>
              <div className="row">
                <div className="col m-0">
                  <div className="row">
                    <div className="col m-0  txt-center">
                      <h2
                        className={`m-0 txt-${props.slice.primary.header_type}`}
                      >
                        {props.slice.primary.header_text}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col m-0 txt-center">
                  <p className="txt-lg m-0">{props.slice.primary.sub_header}</p>
                </div>
              </div>
              <div className="row">
                <div className="col m-0 txt-center">
                  <Button 
                    buttonText={data.button_text}
                    buttonType={data.button_type}
                    buttonLinkUrl={data.button_link.url}
                    buttonLinkUid={data.button_link.uid}
                    buttonAnchorLink={data.anchor_link}
                    accessoPromo={data.accesso_promo_code}
                    accessoKeyword={data.accesso_keyword}
                    accessoPackageId={data.accesso_packageid}
                  />
                </div>
              </div>
            </>
          )}
        </>
      )}

      {props.slice.primary.type === "Right" && (
        <>
          {size.width < 900 && (
            <>
              <div className="row mx-2">
                <div className="col_half m-0"></div>
                <div className="col m-0 pr-0 txt-right">
                  <h2 className={`m-0 txt-${props.slice.primary.header_type}`}>
                    {props.slice.primary.header_text}
                  </h2>
                </div>
              </div>
              <div className="row mx-2">
                <div className="col m-0 pr-0 txt-right">
                  <p className="txt-lg m-0">{props.slice.primary.sub_header}</p>
                </div>
              </div>
              <div className="row mx-2">
                <div className="col m-0 pr-0 txt-right">
                  <Button 
                    buttonText={data.button_text}
                    buttonType={data.button_type}
                    buttonLinkUrl={data.button_link.url}
                    buttonLinkUid={data.button_link.uid}
                    buttonAnchorLink={data.anchor_link}
                    accessoPromo={data.accesso_promo_code}
                    accessoKeyword={data.accesso_keyword}
                    accessoPackageId={data.accesso_packageid}
                  />
                </div>
              </div>
            </>
          )}
          {size.width >= 900 && (
            <>
              <div className="row">
                <div className="col_half m-0"></div>
                <div className="col_half m-0 p-0">
                  <div className="row">
                    <div className="col_half m-0"></div>
                    <div className="col_half m-0 pr-0 txt-right">
                      <h2
                        className={`m-0 txt-${props.slice.primary.header_type}`}
                      >
                        {props.slice.primary.header_text}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col_half m-0"></div>
                <div className="col_half m-0 pr-0 txt-right">
                  <p className="txt-lg m-0">{props.slice.primary.sub_header}</p>
                </div>
              </div>
              <div className="row">
                <div className="col_half m-0"></div>
                <div className="col_half m-0 pr-0 txt-right">
                  <Button 
                    buttonText={data.button_text}
                    buttonType={data.button_type}
                    buttonLinkUrl={data.button_link.url}
                    buttonLinkUid={data.button_link.uid}
                    buttonAnchorLink={data.anchor_link}
                    accessoPromo={data.accesso_promo_code}
                    accessoKeyword={data.accesso_keyword}
                    accessoPackageId={data.accesso_packageid}
                  />
                </div>
              </div>
            </>
          )}
        </>
      )}
    </section>
  )
}
