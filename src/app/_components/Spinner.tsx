interface SpinnerProp {
  children?: React.ReactNode;
}

function Spinner({ children }: SpinnerProp) {
  return (
    <>
      <div className="spinner"></div>
      <p className="text-center">{children}</p>
    </>
  );
}

export default Spinner;
