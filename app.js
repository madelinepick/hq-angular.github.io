angular.module('redditClone', ['ngAnimate','ngMessages', 'angularMoment'])
  .controller('RedditController', function($scope, $timeout) {
      var vm = this;
      vm.time = new Date();
      var posts = [
        { id: 1,
          name: 'Changing the Ratio',
          author: 'Janet Lillian',
          photo: 'http://unreasonable.is/wp-content/uploads/2000/04/MergeGlobig.jpg',
          description: "This is a really great article on changing the ratio of women in business and tech by supporting them in real ways - my backing their business. I'd love to here what other people think: http://unreasonable.is/how-this-startup-accelerator-is-changing-the-ratio/",
          time: 1462134694044,
          rating: 3,
          comments: [
            {
              name: 'Taylor Smith',
              text: 'I actually went through the MergeLane accelerator. I have never felt so supported. The program allowed me to hire more people (3 women!) and expand to new markets. We need to get more accelarators focused on minorities!',
              time: 1462134794054
            }
          ]

        },
        {
          id: 2,
          name: 'MarkIt is Hiring',
          author: "Georgie Finn",
          photo: 'https://pbs.twimg.com/profile_images/478642179145863169/QRqty-Oh.png',
          description: "Hi Everyone. My company, MarkIt, is hiring an Operations Manager. We are building an ecosystem of sustainable solar panel production in Southern Africa, and just got a second round of funding to start building facilities in three countries. If you're interested, DM me for details.",
          time: 1462153514044,
          rating: 1,
          comments: [
            {
              name: "Jenna Andreason",
              text: 'Does this job include international travel? I have a couple of friends who might eb interested but wanted to check on that first.',
              time: Date.now()
            }
          ]

        },
        {
          id: 3,
          name: 'Austin-area meet up?',
          author: 'Kurt Stanley',
          photo: 'http://atleventsgroup.com/atlwp/wp-content/uploads/2014/12/bigstock-Customers-In-Busy-Coffee-Shop-59135180.jpg',
          description: "My co-founder and I just moved our health-tracking software business to Austin and would love to meet up with fellow Unreasonable people. We may be hiring for developers in the next 6-months, so we are particularly interested in meeting people who are in the development community. Anyone interested?",
          time: 1462134697092,
          rating: 8,
          comments: [
            {
              name: "Stan Orilla",
              text: "Hey, I've been in Austin for a couple years now and would love to hear about your venture. I'm a UX designer, but I definitely know a lot of developers and am always interested in getting to know knew people",
              time: Date.now()
            },
            {
              name: "Jon Chader",
              text: "Come to the JS meetup",
              time: 1462134694044
            }
          ]

        }
      ];
      var person = {
        name: 'Madeline Pickering',
        company: 'Galvanize, LLC',
        picture: 'madelinepickering.jpg'
      }
      var messages = [
        {
          id: 1,
          subject: 'Are you coming to Austin Start-up Week?',
          from: 'Alice Tinelli',
          frommessage: 'Hi Madeline! I saw that you were looking to meet developers in Austin and thought I would tell you about Austin Start-up week. It starts on June 2nd and goes for the whole week. There are events all day and a lot of professionals take off a few days to make it to some awesome presentations. It is a great place to meet people and there is always a social portion of the day. Let me know if you go and we can meet up!',
          tomessage: 'I will definitely go! What events are you planning on attending? I will probably go to all the evening presentations and I am definitely interested in the design for impact forum. Are there any you would recommend?',
          time: 1462132564044

        },
        {
          id: 2,
          subject: 'Are you hiring?',
          from: 'Thomas Eller',
          frommessage: 'Hi Madeline! I love your company and heard through a friend that you might be looking for developers. Here is a link to my portfolio: somewebsite.com. Would you be willing to meet up some time?',
          time: 1462142894044

        },
        {
          id: 3,
          subject: 'Austin!',
          from: 'Sandy Kellon',
          frommessage: 'My name is Sandy and I run a small solar power company in Austin. I saw you moved here and just wanted to introduce myself! I love showing people the town and talking small-business. I went through Unreasonable last year and it was one of the best years of my life. I hope to talk soon.',
          tomessage: 'We should get a coffee some time. What days are you free next week?',
          time: 1462132894544

        },
        {
          id: 4,
          subject: 'Welcome to HQ!',
          from: 'HQ Family',
          frommessage: 'Welcome Madeline! Thank you so much for joining HQ - the official headquarters for social entrepreneurs. Here, you can communicate with and learn from all the other amazing people who have gone through our program. Please never hesitate to reach out if you have questions about HQ. Now get to connecting!',
          time: 1462000004044

        }
      ]
      function addPost(){
        $scope.posts = posts;
      }
      $timeout(addPost, 500);
      $scope.messages = messages;
      $scope.person = person;
      $scope.submitOff = true;





      // $scope.submitMessage = function(){
      // $scope.posts.push(
      //   {
      //     id: $scope.messages[$scope.messages.length-1].id +1,
      //     subject: $scope.submitName,
      //     from: $scope.submitPicture,
      //     tomessage: $scope.submitDescription,
      //     time: Date.now()
      //     }
      //   )
      //   $scope.submitAuthor ='';
      //   $scope.submitName = '';
      //   $scope.submitPicture = '';
      //   $scope.submitDescription = '';
      // }
  })
