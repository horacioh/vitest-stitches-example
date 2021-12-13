import { render, screen } from "@testing-library/react"
import React from "react"
import { describe, it } from "vitest"
import { App } from "./App"

describe("Vitest + Stitches Example", () => {
  it("simple mound demo", async () => {
    await render(<App />)
    screen.debug()
  })
})
