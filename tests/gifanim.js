/*
MIT License

Copyright (c) 2019-2021 Andre Seidelt <superilu@yahoo.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

LoadLibrary("gifanim");

/*
** This function is called once when the script is started.
*/
function Setup() {
	SetFramerate(30);
	MouseShowCursor(false);

	i1 = new GIFAnim("tests/homer.gif");
	i2 = new GIFAnim("tests/badger.gif");
	i3 = new GIFAnim("tests/badger2.gif");

	img = i1;
	GifInfo(img);
}

/*
** This function is repeatedly until ESC is pressed or Stop() is called.
*/
function Loop() {
	ClearScreen(EGA.RED);

	if (img != null) {
		img.PlayFrame(10, 10);
		Sleep(img.frameDelay);
	}
}

/*
** This function is called on any input.
*/
function Input(e) {
	Println(JSON.stringify(e));
	if (CompareKey(e.key, '1')) {
		img = i1;
	}
	if (CompareKey(e.key, '2')) {
		img = i2;
	}
	if (CompareKey(e.key, '3')) {
		img = i3;
	}
	GifInfo(img);
}

function GifInfo(g) {
	Println("delay       = " + g.frameDelay);
	Println("min delay   = " + g.minDelay);
	Println("max delay   = " + g.maxDelay);
	Println("frame count = " + g.frameCount);
	Println("duration    = " + g.duration);
	Println("width       = " + g.width);
	Println("height      = " + g.height);
}