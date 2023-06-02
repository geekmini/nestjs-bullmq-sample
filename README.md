

## Diagram
- instance 1 send a message to the queue
- the message will be stored in redis
- one of the 5 instances will process the message

<p align="center"><img style="display: block; width: 600px; margin: 0 auto;" src=img/2023-06-02-22-59-02.png alt="no image found"></p>

## Compare to AWS
- one message send to eventBridge
- eventBridge will broadcast
- lambda orchestrator will receive message from eventBridge
- lambda orchestrator will call specific endpoint of ecs to run the task

<p align="center"><img style="display: block; width: 300px; margin: 0 auto;" src=img/2023-06-02-23-03-05.png alt="no image found"></p>

## Insights
- time-consuming job let orchestrator to trigger ecs to run,
- **let orchestrator to trigger task could utilize the power of load-balancer**


## References
- [BullMQ & Nest.js = Scale](https://www.youtube.com/watch?v=oy-t6V6aAZY&t=88s)