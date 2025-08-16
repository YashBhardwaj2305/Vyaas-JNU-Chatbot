axios.get('http://localhost:4000/api/data')
                .then(response => {
                    console.log('GET Response:', response.data);
                    alert('GET Response: ' + response.data.message);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });