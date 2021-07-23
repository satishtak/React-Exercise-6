import React, { useState } from 'react'

const TextBox = ({ textValue, setTextFunc, heading }) => {
  return (
    <div>
      <span>
        {heading}
      </span>
      <textarea onChange={(e) => { setTextFunc(e.target.value); }} value={textValue} />
    </div>
  );
}

export default function Main() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [currentFeature, setCurrentFeature] = useState(1);

  return (
    <div>
      <div>
        <TextBox textValue={text1} setTextFunc={setText1} heading="Feature 1" />
        <TextBox textValue={text2} setTextFunc={setText2} heading="Feature 2" />
        <TextBox textValue={text3} setTextFunc={setText3} heading="Feature 3" />
      </div>
      <div>
        <div>
          <button onClick={() => setCurrentFeature(1)}>Feature_1</button>
          <button onClick={() => setCurrentFeature(2)}>Feature_2</button>
          <button onClick={() => setCurrentFeature(3)}>Feature_3</button>
        </div>
        <div>
          {currentFeature === 1 ? (
            <TextBox textValue={text1} setTextFunc={setText1} heading="" />
          ) : (
            <>
              {currentFeature === 2 ? (
                <TextBox textValue={text2} setTextFunc={setText2} heading="" />
              ) : (
                <TextBox textValue={text3} setTextFunc={setText3} heading="" />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
