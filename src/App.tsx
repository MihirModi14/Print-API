import "./App.css";

function App() {
  const onClickPrint = () => {
    setTimeout(function () {
      let popupWinindow;
      const innerContents = document?.getElementById("printDetails")?.innerHTML;
      popupWinindow = window.open(
        "",
        "_blank",
        "scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no"
      );

      popupWinindow?.document.open();
      popupWinindow?.document.write(
        '<html><head><title></title></head><body onload="window.print();window.close();">' +
          innerContents +
          "</body>"
      );
      popupWinindow?.document.close();
    }, 200);
  };

  return (
    <>
      <h1>Print API</h1>
      <div className="card">
        <button onClick={onClickPrint}>
          <span className="material-symbols-outlined">print</span>
        </button>
        <p>
          This Above print functionality is not working with{" "}
          <span style={{ fontWeight: "bold" }}>
            Grammarly: AI Writing and Grammar Checker App
          </span>{" "}
          extension enabled
        </p>
      </div>

      <div id="printDetails" style={{ display: "none" }}>
        This are the details which we want to print.
      </div>
    </>
  );
}

export default App;
