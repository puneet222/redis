const sets = redis => {
    redis.sadd('tags', 'red', 'blue', 'green')

    redis.sadd('tags:red', 'angular', 'angular2', 'redis')
    redis.smembers('tags', (err, res) => {
        console.log(res)
    })
    redis.sismember('tags', 'red', (err, res) => {
        console.log(res)
    })
    redis.sismember('tags', 'yellow', (err, res) => {
        console.log(res)
    })
    redis.smembers('tags:red', (err, res) => {
        console.log(res)
    })
}

export default sets