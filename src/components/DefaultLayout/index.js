function DefaultLayout({ children }) {
  return (
    <div className="  min-h-[100vh] h-full flex-col  ">
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
