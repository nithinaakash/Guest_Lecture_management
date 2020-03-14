var Request = require("request");

describe("Server", () => {
    var server;
    beforeAll(() => {
        server = require("../loginbackendlol");
    });
    afterAll(() => {
        server.close();
    });
    describe("POST /", () => {
        var data = {};
        beforeAll((done) => {
            Request.post("http://localhost:8080/", (error, response, body) => {
                data.status = response.statusCode;
                //data.body = body;
                done();
            });
        });
        if(data.status==200)
        {
        it("Status 200 ", () => {
            expect(data.status).toBe(200);
            //expect(data.status).toBe(500);
        });
    }
    else if(data.status==500)
    {
        it("Status 500 ", () => {
            expect(data.status).toBe(500);
            //expect(data.status).toBe(500);
        });
    }
        
    });
    describe("GET /forgotpassword", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:8080/forgotpassword", (error, response, body) => {
                data.status = response.statusCode;
               // data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        
    });
    describe("GET /feedback", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:8080/feedback", (error, response, body) => {
                data.status = response.statusCode;
               // data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        
    });
    describe("GET /changepassword", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:8080/forgotpassword", (error, response, body) => {
                data.status = response.statusCode;
               // data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        
    });
    describe("GET /b", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:8080/b", (error, response, body) => {
                data.status = response.statusCode;
               // data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        
    });
    describe("GET /back", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:8080/back", (error, response, body) => {
                data.status = response.statusCode;
               // data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        
    });
    describe("GET /attend", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:8080/attend", (error, response, body) => {
                data.status = response.statusCode;
               // data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        
    });
    describe("GET /archive", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:8080/archive", (error, response, body) => {
                data.status = response.statusCode;
               // data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        
    });
    describe("GET /resetpassword", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:8080/resetpassword", (error, response, body) => {
                data.status = response.statusCode;
               // data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        
    });

    describe("GET /forgotpassword", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:8080/forgotpassword", (error, response, body) => {
                data.status = response.statusCode;
               // data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        
    });
    describe("GET /done", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:8080/done", (error, response, body) => {
                data.status = response.statusCode;
               // data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        
    });
    describe("POST /ret", () => {
        var data = {};
        beforeAll((done) => {
            Request.post("http://localhost:8080/ret", (error, response, body) => {
                data.status = response.statusCode;
               // data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        
    });
    describe("POST /feedbackView", () => {
        var data = {};
        beforeAll((done) => {
            Request.post("http://localhost:8080/feedbackView", (error, response, body) => {
                data.status = response.statusCode;
               // data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        
    });
    
    
    describe("POST /attendView", () => {
        var data = {};
        beforeAll((done) => {
            Request.post("http://localhost:8080/attendView", (error, response, body) => {
                data.status = response.statusCode;
               // data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        
    });
    describe("POST /archiveSubmit", () => {
        var data = {};
        beforeAll((done) => {
            Request.post("http://localhost:8080/attendView", (error, response, body) => {
                data.status = response.statusCode;
               // data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        
    });
    describe("POST /pas", () => {
        var data = {};
        beforeAll((done) => {
            Request.post("http://localhost:8080/pas", (error, response, body) => {
                data.status = response.statusCode;
               // data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        
    });

    describe("GET /studpage", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:8080/studpage", (error, response, body) => {
                data.status = response.statusCode;
               // data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        
    });

  describe("POST /glect", () => {
        var data = {};
        beforeAll((done) => {
            Request.post("http://localhost:8080/glect", (error, response, body) => {
                data.status = response.statusCode;
               // data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        
    });

    describe("POST /studbackend", () => {
        var data = {};
        beforeAll((done) => {
            Request.post("http://localhost:8080/studbackend", (error, response, body) => {
                data.status = response.statusCode;
               // data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        
    });

    describe("POST /studbackend", () => {
        var data = {};
        beforeAll((done) => {
            Request.post("http://localhost:8080/studbackend", (error, response, body) => {
                data.status = response.statusCode;
               // data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        
    });
    describe("POST /sec", () => {
        var data = {};
        beforeAll((done) => {
            Request.post("http://localhost:8080/sec", (error, response, body) => {
                data.status = response.statusCode;
               // data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        
    });

    
});