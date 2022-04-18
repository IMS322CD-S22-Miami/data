# Working with Data (in p5)

Data visualization is an incredibly powerful and useful tool. However, working with data and finding it in digestible formats can be quite challenging. In general, I would recommend looking for CSV or JSON files. Even then, you may need to do some manual processing and/or investigation to see which parts of the data are relevant.

## Why p5?
p5 provides some very simple functions for loading CSV and JSON files within the preload() function. This is certainly possible with vanilla JavaScript, but is a bit more complicated. Additionally, we already know how to do basic drawing and animation in p5.

## What is CSV?
CSV stands for "comma-separated values" - it is essentially a text file comprised of several rows, each of which includes multiple entries separated by commas. CSV files are most often interpreted as spreadsheets - each row corresponds to a spreadheet row (with the first usually being the header row), and each entry between commas corresponds to a spreadsheet column. In fact, spreadsheet application like Excel and Google Sheets can easily open and save as CSV files, making it easy to edit and/or create your own CSV.  

<a href="https://www.howtogeek.com/348960/what-is-a-csv-file-and-how-do-i-open-it/" target="_blank">What is a CSV file, and how do I open it?</a>  

Take a moment to look at the csv file provided in the p5-csv folder.

## What is JSON?
JSON stands for "JavaScript Object Notation" - it's almost the same as the regular JavaScript object data type that we've already learned, just stored in it's own file. Once it has been loaded into your script, you can work with it just like any JavaScript object, though the loading part can be kind of tricky (hence, we are doing it in p5). The one main caveat - JSON requires double quotes " on everything, even though JavaScript generally lets you use single ' or double " interchangeably.  

<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON" target="_blank">MDN: Working with JSON</a>  

Take a moment to look at the json file provided in the p5-json folder.

## Manual Editing
Sometimes, when you receieve a file with a lot of data, there will be errors. In this case, the find and replace function of VS Code can be your friend! Perhaps there are single quotes instead of double in a JSON file, and you need to replace them all in order to get the file to load into your p5 sketch. Or, perhaps the CSV file that you found annoyingly added extra symbols or punctuation in the header row. Both CS and JSON are just text files and can be opened and edited by any text editor.  
  
You may also just find that it's easy enough to compile your own data, especially when dealing with dozens (rather than hundreds or thousands) of entries. In this case, I would suggest manual copy-paste from your source(s) into a spreadsheet, which can then be exported as a CSV. For example, the annual spreadsheets in the <a href="https://www.miamioh.edu/oir/data/cds/index.html" target="_blank">Miami University Common Data Set</a> are made more for human eyes than automated data crunching. In this case, it wouldn't be terribly difficult to simply find and copy relevant data into a new spreadsheet (e.g. yearly degree-seeking undergraduates by Racial/Ethnic Category in order to identify/visualize trends).  

Finally, if you are comfortable with other programming langauges like Python, there are tools to help take in raw and/or unusable data, parse it automatically, and re-compose into a more convenient CSV or JSON format.