module.exports.allLinks = (id) => {
  
  var linksArr = [
    `{
      "outwardIssue": {
        "id": "${id+1}"
      },
      "inwardIssue": {
        "id": "${id}"
      },
      "type": {
        "id": "10301"
      }
    }`,
    `{
      "outwardIssue": {
        "id": "${id+2}"
      },
      "inwardIssue": {
        "id": "${id}"
      },
      "type": {
        "id": "10301"
      }
    }`,
    `{
      "outwardIssue": {
        "id": "${id+3}"
      },
      "inwardIssue": {
        "id": "${id}"
      },
      "type": {
        "id": "10301"
      }
    }`,
    `{
      "outwardIssue": {
        "id": "${id+4}"
      },
      "inwardIssue": {
        "id": "${id}"
      },
      "type": {
        "id": "10301"
      }
    }`

    ,
    `{
      "outwardIssue": {
        "id": "${id+6}"
      },
      "inwardIssue": {
        "id": "${id+5}"
      },
      "type": {
        "id": "10301"
      }
    }`,
    `{
      "outwardIssue": {
        "id": "${id+7}"
      },
      "inwardIssue": {
        "id": "${id+5}"
      },
      "type": {
        "id": "10301"
      }
    }`,
    `{
      "outwardIssue": {
        "id": "${id+8}"
      },
      "inwardIssue": {
        "id": "${id+5}"
      },
      "type": {
        "id": "10301"
      }
    }`,
    `{
      "outwardIssue": {
        "id": "${id+9}"
      },
      "inwardIssue": {
        "id": "${id+5}"
      },
      "type": {
        "id": "10301"
      }
    }`,
    `{
      "outwardIssue": {
        "id": "${id+10}"
      },
      "inwardIssue": {
        "id": "${id+5}"
      },
      "type": {
        "id": "10301"
      }
    }`,
    `{
      "outwardIssue": {
        "id": "${id+11}"
      },
      "inwardIssue": {
        "id": "${id+5}"
      },
      "type": {
        "id": "10301"
      }
    }`,
    `{
      "outwardIssue": {
        "id": "${id+12}"
      },
      "inwardIssue": {
        "id": "${id+5}"
      },
      "type": {
        "id": "10301"
      }
    }`,
    `{
      "outwardIssue": {
        "id": "${id+13}"
      },
      "inwardIssue": {
        "id": "${id+5}"
      },
      "type": {
        "id": "10301"
      }
    }`

    ,
    `{
      "outwardIssue": {
        "id": "${id+15}"
      },
      "inwardIssue": {
        "id": "${id+14}"
      },
      "type": {
        "id": "10301"
      }
    }`,
    `{
      "outwardIssue": {
        "id": "${id+16}"
      },
      "inwardIssue": {
        "id": "${id+14}"
      },
      "type": {
        "id": "10301"
      }
    }`,
    `{
      "outwardIssue": {
        "id": "${id+17}"
      },
      "inwardIssue": {
        "id": "${id+14}"
      },
      "type": {
        "id": "10301"
      }
    }`

    ,
    `{
      "outwardIssue": {
        "id": "${id+19}"
      },
      "inwardIssue": {
        "id": "${id+18}"
      },
      "type": {
        "id": "10301"
      }
    }`,
    `{
      "outwardIssue": {
        "id": "${id+20}"
      },
      "inwardIssue": {
        "id": "${id+18}"
      },
      "type": {
        "id": "10301"
      }
    }`,
    `{
      "outwardIssue": {
        "id": "${id+21}"
      },
      "inwardIssue": {
        "id": "${id+18}"
      },
      "type": {
        "id": "10301"
      }
    }`

    ,
    `{
      "outwardIssue": {
        "id": "${id+23}"
      },
      "inwardIssue": {
        "id": "${id+22}"
      },
      "type": {
        "id": "10301"
      }
    }`,
    `{
      "outwardIssue": {
        "id": "${id+24}"
      },
      "inwardIssue": {
        "id": "${id+22}"
      },
      "type": {
        "id": "10301"
      }
    }`,
    `{
      "outwardIssue": {
        "id": "${id+25}"
      },
      "inwardIssue": {
        "id": "${id+22}"
      },
      "type": {
        "id": "10301"
      }
    }`,
    `{
      "outwardIssue": {
        "id": "${id+26}"
      },
      "inwardIssue": {
        "id": "${id+22}"
      },
      "type": {
        "id": "10301"
      }
    }`

    ,
    `{
      "outwardIssue": {
        "id": "${id+28}"
      },
      "inwardIssue": {
        "id": "${id+27}"
      },
      "type": {
        "id": "10301"
      }
    }`,
    `{
      "outwardIssue": {
        "id": "${id+29}"
      },
      "inwardIssue": {
        "id": "${id+27}"
      },
      "type": {
        "id": "10301"
      }
    }`,
    `{
      "outwardIssue": {
        "id": "${id+30}"
      },
      "inwardIssue": {
        "id": "${id+27}"
      },
      "type": {
        "id": "10301"
      }
    }`,
    `{
      "outwardIssue": {
        "id": "${id+31}"
      },
      "inwardIssue": {
        "id": "${id+27}"
      },
      "type": {
        "id": "10301"
      }
    }`

    ,
    `{
      "outwardIssue": {
        "id": "${id+33}"
      },
      "inwardIssue": {
        "id": "${id+32}"
      },
      "type": {
        "id": "10301"
      }
    }`

    ,
    `{
      "outwardIssue": {
        "id": "${id+35}"
      },
      "inwardIssue": {
        "id": "${id+34}"
      },
      "type": {
        "id": "10301"
      }
    }`
  ];

  return linksArr;
}