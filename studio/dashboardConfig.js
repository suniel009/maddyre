export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7183f9a975176544d367cf',
                  title: 'Sanity Studio',
                  name: 'maddyre-studio',
                  apiId: '0da6c116-91d9-4231-b811-9aa951edb75b'
                },
                {
                  buildHookId: '5f7183f9c2a68e7212164149',
                  title: 'Blog Website',
                  name: 'maddyre',
                  apiId: '6f0cbe9a-679f-4c28-9e9a-39fd7c94cdea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/suniel009/maddyre',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://maddyre.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
