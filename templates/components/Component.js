export default function Component_template(Component) {
  return (
    `import "./${Component}.css"
const ${Component} = () => {
  return (
    <>
      ${Component} component
    </>
  )
}

export default ${Component}`
  )
}
