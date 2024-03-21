# React Foundations

# Parcel

    - Dev Build
    - Local Server
    - HMR (Hot Module Replacement) Parcel uses file watching algorithm written in C++
    - Caching for faster builds
    - Image Optimization
    - Minification
    - Bundling
    - Compression
    - Consistent Hashing
    - Code Splitting
    - Differential Bundling - support older browsers
    - Diagnostics
    - Tree Shaking - remove unused code

# JSX

    JSX is not HTML in Javascript. JSX is _html-like_ syntax _or XML-like_ syntax.

    Right before the code is loaded to the browser, the bundler (in our case, Parcel) transpiles the JSX to js code with the help of Babel.

    JSX Code ———> React.createElement() [babel transpiles it to this] ———> React Element (JS Object) ———> HTML Element [render function converts it to this]
