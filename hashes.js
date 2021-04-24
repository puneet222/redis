const hashes = (redis) => {

    const HASHSET_NAME = "hashset"

    redis.hmset(HASHSET_NAME, "firstname", "puneet", "lastname", "aggarwal", "counter", 500)

    redis.hgetall(HASHSET_NAME, (err, res) => console.log(res))

    redis.hincrby(HASHSET_NAME, "counter", 90)

    redis.hmget(HASHSET_NAME, "counter", (err, res) => console.log(res))
}

export default hashes