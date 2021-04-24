import Redis from 'ioredis';
import hashes from './hashes';
import strings from './strings';
import lists from './lists';
import sets from './sets';

const redis = new Redis()

redis.hi

strings(redis);

hashes(redis);

lists(redis);

sets(redis);