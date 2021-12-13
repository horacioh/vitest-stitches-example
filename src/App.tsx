import React, { useState } from "react"
import { styled } from "./stitches.config"

export function App() {
  const [count, setCount] = useState(0)

  return (
    <Box>
      <Box
        as="header"
        css={{
          padding: "$3",
        }}
      >
        <Text>Hello Vite + React!</Text>
        <Text>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </Text>
        <Text>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </Text>
      </Box>
    </Box>
  )
}

var Box = styled("div", {
  boxSizing: "border-box",
})

var Text = styled("p", {
  margin: 0,
  padding: 0,
  fontWeight: "bold",
})
