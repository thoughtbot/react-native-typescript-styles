#!/usr/bin/env node

var fs = require("fs-extra")
var process = require("process")

const destDir = "./styles"

const createFolder = () => {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir)
  } else {
    console.log("❌ ./styles already exists, not copying styles...")
    process.exit(1)
  }

  fs.copy(`${__dirname}/styles`, destDir, (e) => {
    if (e) {
      console.error(e)
      process.exit(1)
    } else {
      console.log("✅ Successfuly created styles folder")
      process.exit(0)
    }
  })
}

createFolder()
