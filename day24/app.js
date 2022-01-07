const data = [
  {
      id: 1,
      name: 'Cameron Williamson',
      email: 'cameron.wiliamson@example.com',
      title: 'Software Developer'
  },
  {
      id: 2,
      name: 'Jenny Wilson',
      email: 'jenny.wilson@example.com',
      title: 'Project Manager'
  },
  {
      id: 3,
      name: 'Jane Cooper',
      email: 'jane.cooper@example.com',
      title: 'Marketing Coordinator'
  },
  {
      id: 4,
      name: 'Wade Warren',
      email: 'wade.warren@example.com',
      title: 'Software Tester'
  },
  {
      id: 5,
      name: 'Esther Howard',
      email: 'esther.howard@example.com',
      title: 'Web Designer'
  },
  {
      id: 6,
      name: 'Kristin Watson',
      email: 'kristin.watson@example.com',
      title: 'Marketing Coordinator'
  },
  {
      id: 7,
      name: 'Esther Howard',
      email: 'esther.howard@example.com',
      title: 'Web Designer'
  },
  {
      id: 8,
      name: 'Leslie Alexander',
      email: 'leslie.alexander@example.com',
      title: 'UI/UX Designer'
  },
  {
      id: 9,
      name: 'Ralph Edwards',
      email: 'ralph.edwards@example.com',
      title: 'Software Tester'
  },
  {
      id: 10,
      name: 'Courtney Henry',
      email: 'courtney.henry@example.com',
      title: 'Ethical Hacker'
  },
  {
      id: 11,
      name: 'Willie Jennings',
      email: 'willie.jennings@example.com',
      title: 'Team Leader'
  },
  {
      id: 12,
      name: 'Neveah Simmons',
      email: 'neveah.simmons@example.com',
      title: 'Team Leader'
  },
  {
      id: 13,
      name: 'Theresa Webb',
      email: 'theresa.webb@example.com',
      title: 'Software Tester'
  },
  {
      id: 14,
      name: 'Debbe Baker',
      email: 'debbe.baker@example.com',
      title: 'Software Developer'
  },
  {
      id: 15,
      name: 'Ronald Richards',
      email: 'ronald.richards@example.com',
      title: 'Software Developer'
  },
  {
      id: 16,
      name: 'Deanna Curtis',
      email: 'deanna.curtis@example.com',
      title: 'Scrum Master'
  },
  {
      id: 17,
      name: 'Felicia Reid',
      email: 'felicia.reed@example.com',
      title: 'Ethical Hacker'
  },
  {
      id: 18,
      name: 'Jessie Alexander',
      email: 'jessie.alexander@example.com',
      title: 'Project Manager'
  },
  {
      id: 19,
      name: 'Sam Smith',
      email: 'sam.smith@example.com',
      title: 'Ethical Hacker'
  },
  {
      id: 20,
      name: 'Eleanor Rigby',
      email: 'eleanor.rigby@example.com',
      title: 'UI/UX Designer'
  },
  {
      id: 21,
      name: 'Devon Lane',
      email: 'devon.lane@example.com',
      title: 'Team Leader'
  },
  {
      id: 22,
      name: 'Guy Hawkins',
      email: 'guy.hawkins@example.com',
      title: 'Team Leader'
  },
  {
      id: 23,
      name: 'Jim Parks',
      email: 'jim.parks@example.com',
      title: 'Ethical Hacker'
  },
  {
      id: 24,
      name: 'Susanne Ford',
      email: 'susanne.ford@example.com',
      title: 'Software Developer Manager'
  },
  {
      id: 25,
      name: 'Kathryn Murphy',
      email: 'kathryn.murphy@example.com',
      title: 'Project Manager'
  },
  {
      id: 26,
      name: 'Cody Fisher',
      email: 'cody.fisher@example.com',
      title: 'Software Developer'
  },
  {
      id: 27,
      name: 'Jane Cooper',
      email: 'jane.cooper@example.com',
      title: 'Software Tester'
  },
  {
      id: 28,
      name: 'Karen MacAfee',
      email: 'karen.macafee@example.com',
      title: 'UI/UX Designer'
  },
  {
      id: 29,
      name: 'Dianne Russell',
      email: 'dianne.russell@example.com',
      title: 'Ethical Hacker'
  },

]

// table elements //
const tableBody = document.querySelector('tbody')
const sortIdBtn = document.getElementById('sortIdBtn')
const sortNameBtn = document.getElementById('sortNameBtn')
const sortEmailBtn = document.getElementById('sortEmailBtn')
const sortTitleBtn = document.getElementById('sortTitleBtn')
const sortBtns = [sortIdBtn, sortNameBtn, sortEmailBtn, sortTitleBtn]


// pagination //
const nextBtn = document.getElementById('next')
const previousBtn = document.getElementById('previous')
const currentPageInput = document.getElementById('currentPage')

// footer info //
const totalResults = document.getElementById('totalResults')
const totalPages = document.getElementById('totalPages')

let currentPage = 1
let visibleData = data.slice(0, 10)

let resultsPerPage = 10

let maxPages = Math.ceil(data.length/resultsPerPage)

const sortResults = (sortBtn, sortFunction) => {
  const sortType = sortBtn.classList.contains('descending') ? 'ascending' : 'descending'
  visibleData.sort(sortFunction)
  sortBtns.forEach(btn => btn.classList.remove('ascending', 'descending'))
  sortBtn.classList.add(sortType)
  if(sortType === 'descending') {
    visibleData.reverse()
  }
  renderTable(visibleData)
}

const setToEditState = (e) => {
  const rowToEdit = e.target.closest('tr')
  rowToEdit.classList.add('edit')

  // add event listeners to update buttons

  const updateButton = rowToEdit.querySelector('.update')
  updateButton.addEventListener('click', () => {
    rowToEdit.classList.remove('edit')
  })
}

// sorting button listeners //
sortIdBtn.addEventListener('click', () => {
  sortResults(sortIdBtn, (a, b) => a.id - b.id)
})
sortNameBtn.addEventListener('click', () => {
  sortResults(sortNameBtn, (a, b) => a.name.localeCompare(b.name))
})
sortEmailBtn.addEventListener('click', () => {
  sortResults(sortEmailBtn, (a, b) => a.email.localeCompare(b.email))
})
sortTitleBtn.addEventListener('click', () => {
  sortResults(sortTitleBtn, (a, b) => a.title.localeCompare(b.title))
})

//pagination listeners //

nextBtn.addEventListener('click', () => {
  if(currentPage < maxPages) {
    currentPage++
    visibleData = data.slice(10*(currentPage -1), 10* currentPage)
    currentPageInput.value = currentPage
    renderTable(visibleData)
  }
})
previousBtn.addEventListener('click', () => {
  if(currentPage > 1) {
    currentPage--
    visibleData = data.slice(10*(currentPage -1), 10* currentPage)
    currentPageInput.value = currentPage
    renderTable(visibleData)
  }
})

//edit button listeners

const renderTable = (data) => {
  tableBody.innerHTML = data.map(item => 
    `
    <tr>
    <td>${item.id}</td>
    <td><input type="text" name="person-name-${item.id}" value="${item.name}"/></td>
    <td><input type="email" name="email-${item.id}" value="${item.email}"/></td>
    <td><input type="text" name="title-${item.id}" value="${item.title}" /></td>
    <td>
      <button class="edit" name="person-edit-${item.id}" id="personEdit${item.id}"><img src="./images/edit.svg" alt="edit"></button>
      <button class="update" name="person-update-${item.id}" id="personUpdate${item.id}"><img src="./images/update.svg" alt="update"></button>
    </td>
  </tr>
  `
  ).join('')

  //add event listeners to edit buttons 
  const editBtns = document.querySelectorAll('button.edit')

  editBtns.forEach(btn => {
    btn.addEventListener('click', setToEditState)
  })
}





//  set number of results and max pages
const updateFooter = (data) => {
  totalResults.innerHTML = `${data.length} results`
  totalPages.innerHTML = maxPages
}


renderTable(visibleData)
updateFooter(data)