<>
  <meta charSet="UTF-8" />
  <title>Single Page Application with Multiple Dropdown Link Selection</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n            font-family: Arial, sans-serif;\n            margin: 0;\n            padding: 0;\n        }\n        .container {\n            max-width: 800px;\n            margin: 0 auto;\n            padding: 20px;\n        }\n        .button1 {\n            background-color: #007BFF;\n            color: #fff;\n            padding: 10px 20px;\n            border: none;\n            cursor: pointer;\n        }\n        .button1:hover {\n            background-color: #0056b3;\n        }\n\t.button2 {\n            background-color: #007BFF;\n            color: #fff;\n            padding: 10px 20px;\n            border: none;\n            cursor: pointer;\n        }\n        .button2:hover {\n            background-color: #0056b3;\n        }\n\t.button3 {\n            background-color: #007BFF;\n            color: #fff;\n            padding: 10px 20px;\n            border: none;\n            cursor: pointer;\n        }\n        .button3:hover {\n            background-color: #0056b3;\n        }\n        .dropdown {\n            margin-bottom: 20px;\n        }\n        .dynamic-dropdown {\n            display: none;\n        }\n        #content {\n            display: none;\n        }\n    "
    }}
  />
  <div className="container">
    <h1>Single Page Application with Multiple Dropdown Link Selection</h1>
    {/* Dropdown for Category 1 */}
    <div className="dropdown">
      <label htmlFor="subject">subject:</label>
      <select id="subject">
        <option value="none">Select a subject</option>
        <option value="webtech">web technology</option>
        <option value="ds">DS</option>
        <option value="sds">SDS</option>
        <option value="ddco">DDCO</option>
        <option value="afll">AFLL</option>
      </select>
    </div>
    {/* Dynamic Dropdown for "web technology" */}
    <div className="dynamic-dropdown" id="webtechDropdown">
      <label htmlFor="webtechunits">Select unit for web technology:</label>
      <select id="webtechunits">
        <option value="Unit 1">Unit 1</option>
        <option value="Unit 2">Unit 2</option>
        <option value="Unit 3">Unit 3</option>
        <option value="Unit 4">Unit 4</option>
        <option value="Unit 5">Unit 5</option>
      </select>
    </div>
    {/* Dynamic Dropdown for "DS" */}
    <div className="dynamic-dropdown" id="dsDropdown">
      <label htmlFor="dsunits">Select unit for DS:</label>
      <select id="dsunits">
        <option value="Unit 1">Unit 1</option>
        <option value="Unit 2">Unit 2</option>
        <option value="Unit 3">Unit 3</option>
        <option value="Unit 4">Unit 4</option>
        <option value="Unit 5">Unit 5</option>
      </select>
    </div>
    {/* Dynamic Dropdown for "SDS" */}
    <div className="dynamic-dropdown" id="sdsDropdown">
      <label htmlFor="sdsunits">Select unit for SDS:</label>
      <select id="sdsunits">
        <option value="Unit 1">Unit 1</option>
        <option value="Unit 2">Unit 2</option>
        <option value="Unit 3">Unit 3</option>
        <option value="Unit 4">Unit 4</option>
        <option value="Unit 5">Unit 5</option>
      </select>
    </div>
    <div className="dynamic-dropdown" id="ddcoDropdown">
      <label htmlFor="ddcounits">Select unit for ddco:</label>
      <select id="ddcounits">
        <option value="Unit 1">Unit 1</option>
        <option value="Unit 2">Unit 2</option>
        <option value="Unit 3">Unit 3</option>
        <option value="Unit 4">Unit 4</option>
        <option value="Unit 5">Unit 5</option>
      </select>
    </div>
    <div className="dynamic-dropdown" id="afllDropdown">
      <label htmlFor="afllunits">Select unit for afll:</label>
      <select id="afllunits">
        <option value="Unit 1">Unit 1</option>
        <option value="Unit 2">Unit 2</option>
        <option value="Unit 3">Unit 3</option>
        <option value="Unit 4">Unit 4</option>
        <option value="Unit 5">Unit 5</option>
      </select>
    </div>
    {/* Dynamic Dropdown for "webtechnology" */}
    <div className="dynamic-dropdown" id="webtechDropdowntext">
      <label htmlFor="webtechunitstext">
        Select unit for web technology(text):
      </label>
      <select id="webtechunitstext">
        <option value="Text 1">TEXTBOOK(Unit 1)</option>
        <option value="Text 2">TEXTBOOK(Unit 2)</option>
        <option value="Text 3">TEXTBOOK(Unit 3)</option>
        <option value="Text 4">TEXTBOOK(Unit 4)</option>
        <option value="Text 5">TEXTBOOK(Unit 5)</option>
      </select>
    </div>
    {/* Dynamic Dropdown for "ds" */}
    <div className="dynamic-dropdown" id="dsDropdowntext">
      <label htmlFor="dsunitstext">Select unit for ds(text):</label>
      <select id="dsunitstext">
        <option value="Text 1">TEXTBOOK(Unit 1)</option>
        <option value="Text 2">TEXTBOOK(Unit 2)</option>
        <option value="Text 3">TEXTBOOK(Unit 3)</option>
        <option value="Text 4">TEXTBOOK(Unit 4)</option>
        <option value="Text 5">TEXTBOOK(Unit 5)</option>
      </select>
    </div>
    {/* Dynamic Dropdown for "sds" */}
    <div className="dynamic-dropdown" id="sdsDropdowntext">
      <label htmlFor="sdsunitstext">Select unit for sds(text):</label>
      <select id="sdsunitstext">
        <option value="Text 1">TEXTBOOK(Unit 1)</option>
        <option value="Text 2">TEXTBOOK(Unit 2)</option>
        <option value="Text 3">TEXTBOOK(Unit 3)</option>
        <option value="Text 4">TEXTBOOK(Unit 4)</option>
        <option value="Text 5">TEXTBOOK(Unit 5)</option>
      </select>
    </div>
    {/* Dynamic Dropdown for "ddco" */}
    <div className="dynamic-dropdown" id="ddcoDropdowntext">
      <label htmlFor="ddcounitstext">Select unit for ddco(text):</label>
      <select id="ddcounitstext">
        <option value="Text 1">TEXTBOOK(Unit 1)</option>
        <option value="Text 2">TEXTBOOK(Unit 2)</option>
        <option value="Text 3">TEXTBOOK(Unit 3)</option>
        <option value="Text 4">TEXTBOOK(Unit 4)</option>
        <option value="Text 5">TEXTBOOK(Unit 5)</option>
      </select>
    </div>
    {/* Dynamic Dropdown for "afll" */}
    <div className="dynamic-dropdown" id="afllDropdowntext">
      <label htmlFor="afllunitstext">Select unit for afll(text):</label>
      <select id="afllunitstext">
        <option value="Text 1">TEXTBOOK(Unit 1)</option>
        <option value="Text 2">TEXTBOOK(Unit 2)</option>
        <option value="Text 3">TEXTBOOK(Unit 3)</option>
        <option value="Text 4">TEXTBOOK(Unit 4)</option>
        <option value="Text 5">TEXTBOOK(Unit 5)</option>
      </select>
    </div>
    {/* Dynamic Dropdown for "web technology" */}
    <div className="dynamic-dropdown" id="webtechDropdownslides">
      <label htmlFor="webtechunitsslides">
        Select unit for web technology(slides):
      </label>
      <select id="webtechunitsslides">
        <option value="Slides 1">SLIDES(Unit 1)</option>
        <option value="Slides 2">SLIDES(Unit 2)</option>
        <option value="Slides 3">SLIDES(Unit 3)</option>
        <option value="Slides 4">SLIDES(Unit 4)</option>
        <option value="Slides 5">SLIDES(Unit 5)</option>
      </select>
    </div>
    {/* Dynamic Dropdown for "ds" */}
    <div className="dynamic-dropdown" id="dsDropdownslides">
      <label htmlFor="dsunitsslides">Select unit for ds(slides):</label>
      <select id="dsunitsslides">
        <option value="Slides 1">SLIDES(Unit 1)</option>
        <option value="Slides 2">SLIDES(Unit 2)</option>
        <option value="Slides 3">SLIDES(Unit 3)</option>
        <option value="Slides 4">SLIDES(Unit 4)</option>
        <option value="Slides 5">SLIDES(Unit 5)</option>
      </select>
    </div>
    {/* Dynamic Dropdown for "sds" */}
    <div className="dynamic-dropdown" id="sdsDropdownslides">
      <label htmlFor="sdsunitsslides">Select unit for sds(slides):</label>
      <select id="sdsunitsslides">
        <option value="Slides 1">SLIDES(Unit 1)</option>
        <option value="Slides 2">SLIDES(Unit 2)</option>
        <option value="Slides 3">SLIDES(Unit 3)</option>
        <option value="Slides 4">SLIDES(Unit 4)</option>
        <option value="Slides 5">SLIDES(Unit 5)</option>
      </select>
    </div>
    {/* Dynamic Dropdown for "ddco" */}
    <div className="dynamic-dropdown" id="ddcoDropdownslides">
      <label htmlFor="ddcounitsslides">Select unit for ddco(slides):</label>
      <select id="ddcounitsslides">
        <option value="Slides 1">SLIDES(Unit 1)</option>
        <option value="Slides 2">SLIDES(Unit 2)</option>
        <option value="Slides 3">SLIDES(Unit 3)</option>
        <option value="Slides 4">SLIDES(Unit 4)</option>
        <option value="Slides 5">SLIDES(Unit 5)</option>
      </select>
    </div>
    {/* Dynamic Dropdown for "afll" */}
    <div className="dynamic-dropdown" id="afllDropdownslides">
      <label htmlFor="afllunitsslides">Select unit for afll(slides):</label>
      <select id="afllunitsslides">
        <option value="Slides 1">SLIDES(Unit 1)</option>
        <option value="Slides 2">SLIDES(Unit 2)</option>
        <option value="Slides 3">SLIDES(Unit 3)</option>
        <option value="Slides 4">SLIDES(Unit 4)</option>
        <option value="Slides 5">SLIDES(Unit 5)</option>
      </select>
    </div>
    <button className="button1" id="notes">
      Go to Selected notes
    </button>
    <button className="button2" id="text">
      Go to Selected text
    </button>
    <button className="button3" id="slides">
      Go to Selected slides
    </button>
    <div id="content">
      <div id="linkContainer">{/* Links will be opened here */}</div>
    </div>
  </div>
</>
