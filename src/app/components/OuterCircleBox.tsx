export const OuterCircleBox = () => {
  return (
    <div className="grid self-center min-h-full mx-8">
      <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 place-content-center w-full">
        <div className="card">
          <p>Lorem Ipsum</p>
          <div className="holder one"></div>
        </div>
        <div className="card">
          <p>Lorem Ipsum</p>
          <div className="holder two"></div>
        </div>
        <div className="card row-start-2">
          <p>Lorem Ipsum</p>
          <div className="holder three"></div>
        </div>
        <div className="card row-start-2">
          <p>Lorem Ipsum</p>
          <div className="holder four"></div>
        </div>
      </section>
    </div>
  );
};

export default OuterCircleBox;
