/**
 * Open a file, for file modes see {@link FILE}. Files can only either be read or written, never both. Writing to a closed file throws an exception.
 * @class
 * 
 * @param {string} filename the name of the file.
 * @param {FILE} mode READ, WRITE or APPEND.
 */
function File(filename, mode) {
	/**
	 * Name of the file.
	 * @member {string}
	 */
	this.filename = null;
	/**
	 * file open mode
	 * @member {FILE}
	 */
	this.mode = null;
}
/**
 * Close the file.
 */
File.prototype.Close = function () { };
/**
 * get file size.
 * @returns {number} the size of the file in bytes.
 */
File.prototype.GetSize = function () { };
/**
 * Write a string to a file.
 * @param {string} txt the string to write.
 */
File.prototype.WriteString = function (txt) { };
/**
 * Read a line of text from file. The maximum line length is 4096 byte.
 * @returns {string} the next line or null for EOF.
 */
File.prototype.ReadLine = function () { };
/**
 * Write a NEWLINE terminated string to a file.
 * @param {string} txt the string to write.
 */
File.prototype.WriteLine = function (txt) { };
/**
 * Read a single byte from file and return it as number.
 * @returns {number} the byte as a number or null for EOF.
 */
File.prototype.ReadByte = function () { };
/**
 * Write a single byte to a file.
 * @param {number} ch the byte to write.
 */
File.prototype.WriteByte = function (ch) { };
/**
 * get file contents as number array.
 * @returns {number[]} the remaining contents of the file as array of numbers.
 */
File.prototype.ReadBytes = function () { };
/**
 * Write a bytes to a file.
 * @param {number[]} data the data to write as array of numbers (must be integers between 0-255).
 */
File.prototype.WriteBytes = function (data) { };
/**
 * get file contents as number IntArray.
 * @returns {IntArray} the remaining contents of the file as IntArray.
 */
File.prototype.ReadInts = function () { };
/**
 * Write a bytes to a file.
 * @param {IntArray} data the data to write as IntArray (must be integers between 0-255).
 */
File.prototype.WriteInts = function (data) { };
