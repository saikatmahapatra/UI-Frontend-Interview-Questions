// Task #1 (IQVIA Interview)

// We are developing a new feature to display tables in the app. We’re going to use a third-party library to render a table, but it expects a different data format compared to what we receive from the server. Below are the examples of what the library expects (Sample A) and what we receive from the server (Sample B).
// Sample A. Expected JSON for the library
// {
//   "headers": ["Sample Name", "Height", "Weight"],
//   "rows": [
//     ["Sample A", 543, 19.1],
//     ["Sample B", 423, 11],
//     ["Sample C", 646, 12.5]
//   ]
// }
// Sample B. Actual JSON from the server
// {
//   "columns": [
//     {
//       "header": {
//         "title": "Sample Name",
//         "key": "name"
//       },
//       "data": ["Sample A", "Sample B", "Sample C"]
//     },
//     {
//       "header": {
//         "title": "Height",
//         "key": "height"
//       },
//       "data": [543, 423, 646]
//     },
//     {
//       "header": {
//         "title": "Weight",
//         "key": "weight"
//       },
//       "data": [19.1, 11, 12.5]
//     }
//   ]
// }

let mockData = {
    "columns": [
      {
        "header": {
          "title": "Sample Name",
          "key": "name"
        },
        "data": ["Sample A", "Sample B", "Sample C"]
      },
      {
        "header": {
          "title": "Height",
          "key": "height"
        },
        "data": [543, 423, 646]
      },
      {
        "header": {
          "title": "Weight",
          "key": "weight"
        },
        "data": [19.1, 11, 12.5]
      }
    ]
  };



  function convertData(mockData) {
    let tableData = {
      "headers": [],
      "rows": []
    };
    if (mockData && mockData.columns && mockData.columns.length) {
      mockData.columns.forEach((col, rowIndex) => {
        tableData.headers.push(col.header?.title);
        // now for each column we need to iterate over data array and push it to rows array
        col.data.forEach((dataItem, dataItemIndex) => {
          // if rows array does not have an entry for this index, create one
          if (!tableData.rows[dataItemIndex]) {
            tableData.rows[dataItemIndex] = [];
          }
          tableData.rows[dataItemIndex][rowIndex] = dataItem;
        });
      });
    }
    return tableData;
  }



  //Angular: app.component.ts

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent implements OnInit {
//   title = 'practice-angular';
//   mockData: any = {
//     "columns": [
//       {
//         "header": {
//           "title": "Sample Name",
//           "key": "name"
//         },
//         "data": ["Sample A", "Sample B", "Sample C"]
//       },
//       {
//         "header": {
//           "title": "Height",
//           "key": "height"
//         },
//         "data": [543, 423, 646]
//       },
//       {
//         "header": {
//           "title": "Weight",
//           "key": "weight"
//         },
//         "data": [19.1, 11, 12.5]
//       }
//     ]
//   };
//   tableData: any;


//   ngOnInit(): void {
//     this.tableData = this.convertData(this.mockData);
//   }

//   convertData(mockData: any) {
//     let tableData: any = {
//       "headers": [],
//       "rows": []
//     };
//     if (mockData && mockData.columns && mockData.columns.length) {
//       mockData.columns.forEach((col: any, rowIndex: number) => {
//         tableData.headers.push(col.header?.title);
//         // now for each column we need to iterate over data array and push it to rows array
//         col.data.forEach((dataItem: any, dataItemIndex: number) => {
//           // if rows array does not have an entry for this index, create one
//           if (!tableData.rows[dataItemIndex]) {
//             tableData.rows[dataItemIndex] = [];
//           }
//           tableData.rows[dataItemIndex][rowIndex] = dataItem;
//         });
//       });
//     }

//     return tableData;
//   }
// }
