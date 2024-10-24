import React, {useState} from 'react';

const AutocorrectTextarea = ({corrections}) => {
  const [value, setValue] = useState()

  const handleChange = (e) => {
    let currentText = e.target.value
    const lastValue = currentText[currentText.length - 1]

    // if the last value is a space, check the last word for a misspelling
    if (lastValue === " ") {
      const words = currentText.split(" ")
      const lastWord = words[words.length - 2 ]
     
     if (corrections[lastWord]) {
      const correctedWord = corrections[lastWord]
      currentText = currentText.replace(lastWord, correctedWord)
     }
    }

    setValue(currentText)
  }

    return (
      <div className="text-center">
        <textarea data-testid="textarea" 
          value={value} 
          onChange={(e) => handleChange(e)} 
          rows={10} 
          cols={80} 
          className="card" />
      </div>
    );
}

export default AutocorrectTextarea;
