# react-duallist-selector
A basic dual list box for react.

![screenshot](img/Screenshot.jpg)

## Usage
### Installation

Install the library:

using nmp:
```powershell
npm i react-duallist-selector
```

### Render Components
```jsx
import { useState } from "react";

// components
import DualList from "./Components/DualList";

function App() {
  const availableList = [
    "Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6", "Option 7"
  ]

  const [selectedList, setSelectedList] = useState([])

  const option1 = {
    title1: 'Available Fields',
    title2: 'Selected Fields',
    data: availableList,
  }

  useEffect(() => {
    console.log(selectedList)
  }, [selectedList])

  return (
    <>
      <DualList 
        options = {option1}
        selected = {selectedList}
        onSelectChange = {(newArray) => setSelectedList(newArray)}
      />
    </>
  )
}

export default App;
```
As you add the values to the selected list the ```selectedList``` will update automatically.