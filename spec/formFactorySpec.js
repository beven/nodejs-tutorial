/**
 * Created by Beven on 27/10/2014.
 */

"use strict";

var expectedUploadForm = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; ' +
    'charset=UTF-8" />' +
    '</head>' +
    '<body>' +
    '<form action="/upload" method="post">' +
    '<textarea name="text" rows="20" cols="60"></textarea>' +
    '<input type="submit" value="Submit text" />' +
    '</form>' +
    '</body>' +
    '</html>';

describe("Form Factory", function () {
    it("Creates a upload form", function () {
        expect(createUploadForm()).toEqual(expectedUploadForm);
    });
});
