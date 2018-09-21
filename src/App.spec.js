it("async test 1", done => {
    setTimeout(done, 100);
});

it("async test 1", ()=> {
    return new Promise (
       resolve => setTimeout(resolve, 1500)
    );
});